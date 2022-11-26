<template>
    <RegisterForm :auth="auth" @submit:auth="onRegister"></RegisterForm>
</template>

<script>
import axios from 'axios';
import RegisterForm from "@/components/RegisterForm.vue";

export default {
    components: {
        RegisterForm,
    },
    data() {
        return {
            auth: {
                name: "",
                email: "",
                password: "",
            }
        };
    },
    methods: {
        async onRegister() {
            try {
                let data = {
                    name: this.auth.name,
                    email: this.auth.email,
                    password: this.auth.password,

                }
                // console.log(data);
                let response = await axios.post('http://localhost:3000/api/auth/signup', data);
                console.log(response);

                this.$router.push('/login');

            } catch (err) {
                console.log(err);

            }
        }
    }
}

</script>