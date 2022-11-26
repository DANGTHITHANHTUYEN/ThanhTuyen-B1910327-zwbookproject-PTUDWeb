<template>
    <div class="registerpage">
        <div class="container ">
            <div class="row">
                <div class="col-sm-1"></div>

                <div class="col-sm-5 mb-5">
                    <div class="text-center my-3">
                        <img src="/logo.png" class="w-50 h-75 " alt="">
                    </div>

                    <from class="mt-5  " method="POST">
                        <div class="a-box border">
                            <div class="a-box inner px-3 ">
                                <h1 class="text-center py-2"> Đăng ký tài khoản </h1>
                                <div class="mb-3">
                                    <label for="name" class="form-label">Nhập tên</label>
                                    <input type="text" class="form-control" id="name" placeholder="Thanh Thanh"
                                        aria-describedby="emailHelp" v-model="authLocal.name">
                                </div>
                                <div class="mb-3">
                                    <label for="email" class="form-label">Địa chỉ email</label>
                                    <input type="email" class="form-control" id="email" placeholder="thanh@gmail.com"
                                        aria-describedby="emailHelp" v-model="authLocal.email">
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Mật khẩu</label>
                                    <input type="password" class="form-control" id="password" placeholder="********"
                                        v-model="authLocal.password">
                                </div>
                                <div class="text-center mb-3">
                                    <button type="submit" @click="submitRegister" class="btn btn-primary ">Đăng ký
                                    </button>
                                    <button v-if="auth._id" type="submit" @click="submit" class="btn btn-primary ">Capj
                                        nhat </button>
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
export default {

    emits: ["submit:auth",],
    props: {
        auth: { type: Object, required: true }
    },
    data() {
        return {
            authLocal: this.auth,
        };
    },
    methods: {
        submitRegister() {
            this.$emit("submit:auth", this.authLocal);
        },
    },
};

</script>
<style>
.loginpage,
.registerpage {
    background-image: url("/background1pg.jpg");
    background-repeat: no-repeat;
}
</style>