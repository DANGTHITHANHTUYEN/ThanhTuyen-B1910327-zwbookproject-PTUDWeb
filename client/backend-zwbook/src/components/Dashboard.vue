<template>
    <div class="registerpage">
        <div class="container">
            <div class="row">
                <div class="col-sm-1"></div>
                <div class="col-sm-5 mb-5">
                    <div class="text-center my-3">
                        <img src="/logo.png" class="w-50 h-75 " alt="">
                    </div>
                    <from class="mt-5" method="POST">
                        <div class="a-box border">
                            <div class="a-box inner px-3">
                                <h1 class="text-center"> Thông tin người dùng </h1>
                                <div class="mb-3">
                                    <label for="name" class="form-label">Nhập tên</label>
                                    <input type="text" class="form-control" id="name" aria-describedby="emailHelp"
                                        :placeholder="user.name" v-model="name">
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Địa chỉ email</label>
                                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
                                        :placeholder="user.email" v-model="email">
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Mật khẩu </label>
                                    <input type="password" class="form-control" id="password" v-model="password"
                                        placeholder="******">
                                </div>
                                <div class="text-center mb-3">
                                    <button type="submit" @click="onUpdateProfile" class="btn btn-primary">Cập nhật
                                    </button>

                                </div>
                            </div>
                        </div>
                    </from>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            user: [],
            name: "",
            email: "",
            password: "",
        };
    },
    mounted() {

        console.log(localStorage.getItem('token'));
        var user = JSON.parse(localStorage.getItem('user'));
        this.user = user;
        console.log(user)

    },

    methods: {
        async onUpdateProfile() {
            let data = {
                name: this.name,
                email: this.email,
                password: this.password,
                token: localStorage.getItem('token'),
            }
            try {
                let response = await axios.put("http://localhost:3000/api/auth/edituser", data);
                console.log(response);
                localStorage.removeItem('user');
                localStorage.setItem('user', JSON.stringify(response.data.user));
                window.location.replace('/');

            } catch (err) {
                console.log(err);
            }
        }
    }
}
</script>