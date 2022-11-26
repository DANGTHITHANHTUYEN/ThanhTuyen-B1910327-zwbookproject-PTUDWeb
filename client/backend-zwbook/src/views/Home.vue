<template> 
    <div class="container">
        <div class="row mt-5">
            <div class="col-lg-3 md-8 col-sm-4">
                <!-- Carousel -->
                <div class="category sidemenu-template bg-light">
                    <h4 class="title pl-2"> <i class="fa-solid fa-bars"></i> Danh mục </h4>
                    <div class="sidemenu-box ">
                        <ul v-for="category in categories" :key="category._id" class="sidebar-menu-new">
                            <li class="text-dark" style="position: relative;"> {{ category.type }} </li>

                        </ul>
                    </div>
                </div>
            </div>

            <div class="col-lg-9 md-8 col-sm-8">
                <AppBanner />
            </div>
        </div>

        <div class="row mt-5">
            <div class="container">
                <div class="category-item row bg-info">
                    <h3>&nbsp; Nổi bật </h3>
                </div>
                <div class="row">
                    <div v-for="book in books" :key="book._id" class="col-sm-3 col-lg-3  mb-3 mt-3 pt-4 border">
                        <img class="img-fluid img-thumbnail " :src="book.image">
                        <p class="m-2">
                            <router-link :to="{ name: 'book', params: { id: book._id } }">
                                <h4>{{ book.title }} </h4>
                            </router-link>
                        </p>
                        <p>Tác giả: {{ book.owner.name }}</p>

                        <h6 class="text-danger"> Giá: {{ book.price }}
                        </h6>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>
<script>
import axios from 'axios';
import AppBanner from '@/components/AppBanner.vue';

export default {
    components: {
        AppBanner
    },

    data() {
        return {
            books: [],
            categories: [],
            errors: [],
            query: null,
        }
    },

    async created() {

        await axios.get(`http://localhost:3000/api/books`)
            .then(response => {
                this.books = response.data.books;
                console.log(response.data.books);

            }).catch(e => {
                this.errors.push(e)
            });

        await axios.get(`http://localhost:3000/api/categories`)
            .then(response => {
                this.categories = response.data.categories;
                console.log(response.data);

            }).catch(e => {
                this.errors.push(e)
            })

    },
};
</script>

<style>
ul>li {
    list-style: none;
}

a:hover {
    text-decoration: none;
}
</style>

 