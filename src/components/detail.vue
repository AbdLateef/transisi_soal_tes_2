<template>
    <div class="lists">
        <div class="heading">
            <h2>User Detail</h2>
        </div>
        <div class="user-detail">
            <div class="user-detail-data">
                <div class="item left">
                    <div class="email">
                        {{user.data.email}}
                    </div>
                    <div style="padding: 10px 0px">
                        <span style="font-size: larger">{{user.data.first_name}} {{user.data.last_name}}</span>
                    </div>
                </div>
                <div class="item">
                    <img :src="user.data.avatar" />
                </div>
            </div>
            <div class="user-detail-ad">
                <strong>{{user.ad.company}}</strong>
                <hr>
                <a :href="user.ad.url">{{user.ad.url}}</a>
                <hr>
                <p style="text-align: left;">{{user.ad.text}}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    
    name: 'app',
    data () {
        return {
           user: [] 
        }
    },
    mounted () {
        this.$http.get('users/'+this.$route.params.id)
        .then(response => {
            console.log(response)
            this.user = response.data
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