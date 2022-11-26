<template>
    <LoginForm :auth="auth" @submit:auth="onLogin"> </LoginForm>
</template>

<script>
import axios from 'axios';
import LoginForm from "@/components/LoginForm.vue";

export default {
    components: {
        LoginForm,
    },
    data() {
        return {
            auth: {
                email: '',
                password: '',

            }
        }
    },
    methods: {
        async onLogin() {
            try {
                let data = {
                    email: this.auth.email,
                    password: this.auth.password,
                }
                let response = await axios.post('http://localhost:3000/api/auth/login', data);
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('user', JSON.stringify(response.data.user))
                
                location.replace('/');

            } catch (err) {
                console.log(err);

            }
        }
    }

} 
</script>