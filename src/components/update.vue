<template>
    <div class="lists">
        <div class="heading">
            <h2>Edit User</h2>
        </div>
        <div class="user-detail">
            <form class="form">
                <div class="user-detail-data">
                    <div class="item left">
                        <input type="text" name="name" v-model="user.name" placeholder="Name"> 
                        <input type="text" name="job" v-model="user.job" placeholder="Job"> 
                        <button 
                        type="button" 
                        id="login-button" 
                        class="updatebutton"
                        @click="updateUser()"
                        >
                            UPDATE USER
                        </button>
                    </div>
                    <div class="item">
                        <img :src="user.pict" />
                    </div>
                </div>
                <div class="user-detail-ad">
                    <strong>{{user.data.company}}</strong>
                    <hr>
                    <a :href="user.data.url">{{user.data.url}}</a>
                    <hr>
                    <p style="text-align: left;">{{user.data.text}}</p>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    
    name: 'app',
    data () {
        return {
            user: {
                name: '',
                job: '',
                pict: '',
                data: '',
            },
        }
    },
    mounted () {
        this.$http.get('users/'+this.$route.params.id)
        .then(response => {
            console.log(response)
            this.user.name = response.data.data.first_name
            this.user.pict = response.data.data.avatar
            this.user.data = response.data.ad
        }).catch(error => {
            console.log(error.response)
        })
    },
    methods: {
        
    },
    computed: {
        
    }
}

</script>

<style scoped>

    .user-detail{
        display: flex;
        flex-direction: column;
        width: 100%;
    }
    .user-detail-data{
        display: flex;
        flex-direction: row;
        width: 100%;
    }
    .user-detail-ad{
        padding: 0px 35px;
        width: 78%;
    }
    .item{
        height: 150px;
        padding: 5px 10px;
    }
    .left{
        width: 250px;
    }
</style>