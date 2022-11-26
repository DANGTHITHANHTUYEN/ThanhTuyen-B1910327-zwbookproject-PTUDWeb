<template>
    <nav class="navbar navbar-expand-sm bg-secondary m-0" style="height:12%">

        <div class="col-lg-4 col-md-4 col-sm-4 col-sm-4">
            <router-link to="/">
                <h2 class="text-white ml-4">ZWBOOK</h2>
            </router-link>
        </div>

        <div class="col-lg-4 col-md-5">
            <div class="input-group">
                <input class="form-control" type="text" placeholder="Search Book in here" id="search" name="search">
                <a class="input-group-append" href="#">

                    <span class="input-group-text"><i class="fa fa-search" aria-hidden="true"></i></span>
                </a>
            </div>
        </div>
        
        <div class="col-lg-1 col-md-0 col-sm-0"></div>
        <div class="col-lg-3">

            <ul class='navbar-nav '>
                <li class='nav-item li-width'>
                    <router-link to="/alert" class='nav-link text-white' href='#'>Thông báo</router-link>
                </li>

                <li v-if="user" class=" nav-item dropdown text-center active">
                    <a class="nav-link dropdown-toggle text-white btn " id="account-option" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-user"></i> Xin chào {{ user.name }}
                    </a>
                    <div class="dropdown-menu  " aria-labelledby="account-option">
                        <router-link to="/profile" class="dropdown-item text-dark">Dashboard</router-link> 
                        <router-link to="/addbook" class="dropdown-item text-dark">Thêm sách </router-link> 
                        <a class="dropdown-item text-dark" href="#">Sửa mật khẩu</a> 
                        <span @click="onLogout" class="dropdown-item text-dark">Đăng xuất</span>
                    </div>
                </li>

                <li v-if="!user" class='nav-item'>
                    <router-link to="/register" class='nav-link text-white' data-toggle='modal' data-target='#login'
                        href='#' id='dangky'>Đăng ký</router-link>
                </li>
                <li v-if="!user" class='nav-item'>
                    <router-link to="/login" class='nav-link text-white' data-toggle='modal' data-target='#login'
                        href='#' id='dangnhap'>Đăng
                        nhập</router-link>
                </li>

                <li class='nav-item'>
                    <router-link to="/cart" class='nav-link text-white' href='#'>Giỏ hàng</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>

export default {
    data() {
        return {
            user: []
        }
    },
    mounted() {

        var user = JSON.parse(localStorage.getItem('user'));
        this.user = user;
        console.log(user)

    },
    methods: {
        onLogout() {
            let token = localStorage.getItem('token');
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.replace("/");

        }
    },
}

</script>

<style>
li-width {
    width: 100px;
}
</style>