<template>
    <div class="lists">
        <div class="heading">
            <h2>Create</h2>
        </div>
        <div class="form">
            <form action="" method="post">
                <input type="text" placeholder="Name" v-model="inputName">
                <input type="text" placeholder="Job" v-model="inputJob">
                <button 
                    type="button"
                    class="createbutton" 
                    @click="addUser()"
                    >
                    Add User
                </button>
            </form>
        </div>
        <div v-if="users.length > 0">
            <span style="font-size: medium; color: rgb(86, 85, 160);">Users Added Successful</span>
            <div v-for="user in users" :key="user.id" class="addedUsers">
                <span><b>Name:</b>{{ user.name }}</span>
                <span><b>Created:</b>{{ user.createdAt }}</span>
                <span><b>ID:</b> {{ user.id }}</span>
                <hr>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    
    name: 'app',
    data () {
        return {
            inputName: '',
            inputJob: ''
        }
    },
    mounted () {
        
    },
    methods: {
        addUser(){
            this.$store.dispatch('addUser', {name: this.inputName, job: this.inputJob})
        }
    },
    computed: {
        users(){
            return this.$store.getters.users
        }
    }
}

</script>

<style scoped>
.addedUsers{
    color: rgb(122, 122, 122);
    display: flex; 
    flex-direction: column; 
    padding: 2px 50px; 
    text-align: left;
}
</style>