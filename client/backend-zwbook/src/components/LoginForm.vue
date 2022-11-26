<template>
    <div class="loginpage">
        <div class="container  h-100"  >
            <div class="row mb-5"  >
                <div class="col-sm-1"  ></div>
                <div class="col-sm-5 mb-5">
                    <div class="text-center my-3"> 
                        <img src="/logo.png" class="w-50 h-75 " alt="">
                    </div>
                    
                    <from class="mt-5" method="POST" action="/">
                        <div class="a-box border">
                            <div class="a-box inner px-3 ">
                                <h1 class="text-center"> Đăng nhập </h1>

                                <div class="mb-3">
                                    <label for="email" class="form-label">Địa chỉ email</label>
                                    <input type="email" class="form-control" id="email" placeholder="thanh@gmail.com"
                                        aria-describedby="emailHelp" v-model="authLocal.email">
                                </div>
                                <div class="mb-3">
                                    <label for="password" class="form-label">Mật khẩu</label>
                                    <input type="password" class="form-control" id="password" placeholder="******"
                                        v-model="authLocal.password">
                                </div>
                                <div class="mb-3 text-center ">

                                    <button type="submit" @click="submitLogin" class="btn btn-primary">Đăng
                                        nhập</button>
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
        submitLogin() {
            this.$emit("submit:auth", this.authLocal);
        },
    },

}

</script> 