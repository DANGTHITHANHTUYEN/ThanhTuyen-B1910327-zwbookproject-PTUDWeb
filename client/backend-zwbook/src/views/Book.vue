<template> 
    <div class="body-content row mt-3">
        <div class="col-lg-1 col-md-1 col-sm-1 col-sm-1"></div>
        <div class="col-lg-3 col-md-3 col-sm-3 col-sm-3">
            <img :src='"/" + book.image' class="img-fluid img-thumbnail h-75">
        </div>
        <div class="col-lg-1 col-md-1 col-sm-1 col-sm-1"></div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-sm-6">
            <h2 class="large">Thông tin sản phẩm</h2>
            <p class="text-secondary " style="font-size:1.8em">
                {{ book.title }}
            </p>
            <p>Tác giả: {{ book.owner.name }}</p>
            <h4 class="text-danger">
                <p> Giá : {{ book.price }}
                    <sup>d</sup>
                </p>
            </h4>
            <router-link class="btn btn-primary" :to="{ name: 'updatebook', params: { id: book._id } }"> Update
            </router-link>
            <p></p>
            <p href="#" class="btn btn-warning" @click="onDeleteBook(book._id)"> Delete</p>
        </div>
        <div class="col-lg-1 col-md-1 col-sm-1 col-sm-1"> </div>
    </div>
    <hr>
    <div class="more-info container">
        <div>
            <h2>Thông tin về tác giả</h2>
            <div class="content">
                <div class="row">
                    <div class="col-md-2 clo-sm-4 col-4">
                        <div class="mainContent">
                            <div class="authorImage">
                                <img :src='"/" + book.owner.image' class="img-fluid img-thumbnail " alt="">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-10 clo-sm-8 col-8">
                        <div class="mainContent">
                            <h3>{{ book.owner.name }}</h3>
                            <div id="author">{{ book.owner.about }} </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2>Sơ lược về sách</h2>
            <div>
                <p>{{ book.description }}</p>
            </div>
        </div>
    </div>
</template>
 
<script>
import axios from 'axios';

export default {

    data() {
        return {
            book: [],
            errors: []
        }
    },

    // lay du lieu khi component duoc tao thanh cong 
    created() {
        axios.get(`http://localhost:3000/api/books/${this.$route.params.id}`)
            .then(response => {
                this.book = response.data.book;
                console.log(response.data.book);

            }).catch(e => {
                this.errors.push(e)
            })
    },

    methods: {
        async onDeleteBook(id) {
            try {
                await axios.delete(`http://localhost:3000/api/books/${id}`);
                this.$router.push({ name: "home" });

            } catch (err) {
                console.log(err);

            }
        }
    }
}
</script>  