<template>
    <div class="lists">
        <div class="heading">
            <h2>Data</h2>
        </div>
        <div v-for="user in users" :key="user.id" class="items" :id="'user_'+user.id">
            <div class="item left">
                <div class="email">
                    {{user.email}}
                </div>
                <div>
                    {{user.first_name}} {{user.last_name}}
                </div>
            </div>
            <div class="item">
                <img :src="user.avatar" />
            </div>
            <div class="item">
                <router-link :to="'/detail/'+user.id">Detail</router-link> |
                <router-link :to="'/update/'+user.id">Update</router-link> |
                <a href="#" @click="deleteUser(user.id)">Delete</a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    
    name: 'app',
    data () {
        return {
            users: [],
            page: 1,
            perPage: 0,
            totalPage: 0,
            totalData: 0
        }
    },
    mounted () {
        this.$http.get('users?page=1')
        .then(response => {
            console.log(response)
            this.users = response.data.data
            this.page = response.data.page,
            this.perPage = response.data.per_page,
            this.totalPage = response.data.total_pages,
            this.totalData = response.data.total
        }).catch(error => {
            console.log(error.response)
        })
    },
    methods: {
        deleteUser(id){
            var r = confirm("You Want to Delete !");
            if (r == true) {
                this.$http.delete('users/'+id)
                .then(response => {
                    console.log(response)
                    document.getElementById('user_'+id).remove()
                }).catch(error => {
                    console.log(error.response)
                    alert('Fail to Delete !')
                })
            } else {
                return false
            }
        }
    },
    computed: {
        
    }
}

</script>

<style scoped>
    .items{
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    .item{
        height: 150px;
        padding: 5px 10px;
    }
    .left{
        width: 250px;
    }
</style>