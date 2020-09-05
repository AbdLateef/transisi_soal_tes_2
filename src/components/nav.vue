<template>
    <div class="login">
        <div class="sidebar">
            <router-link to="/">Home</router-link>
            <router-link to="/lists">User List</router-link>
            <router-link to="/create">Create User</router-link>
            <a href="#" @click="logout()">Logout</a>
        </div>
        
        <!-- <div>
            Detail User
        </div>
        <div>
            Update User
        </div>
        <div>
            Delete User
        </div> -->
    </div>
</template>

<script>
export default {
    methods: {
        logout(){
            this.$store.commit('loginStatus', false)
            location.reload()
        }
    },
}
</script>