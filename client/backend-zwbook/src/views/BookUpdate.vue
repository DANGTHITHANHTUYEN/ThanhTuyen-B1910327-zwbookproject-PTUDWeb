<template> 
    <div class="container main-container mt-3">
        <div class="row mb-5">
            <div class="col-sm-3"></div>
            <div class="col-sm-6 my-3">

                <div v-if="book.id._id" class="title text-center">
                    <h2 class="text-info">Cập nhật sách</h2>
                </div>
                <div v-else class="title text-center">
                    <h2 class="text-info">Thêm sách mới</h2>
                </div>

                <AddBookForm v-if="book.id._id" :book="book" @submit:book="onUpdateBook(book.id._id)"></AddBookForm>
                <AddBookForm v-else :book="book" @submit:book="onAddBook"></AddBookForm>
                <p>{{ message }}</p>
            </div>
        </div>
    </div>

</template>
<script>
import axios from 'axios';
import AddBookForm from "@/components/AddBookForm.vue";

export default {
    components: {
        AddBookForm
    },
    data() {
        return {
            book: {
                id: [],
                owners: [],
                categories: [],
                categoryID: null,
                ownerID: null,
                title: "",
                price: 0,
                description: "",
                quantity: 1,
                image: "",
            },
            message: "",
        };
    },

    async created() {
        try {
            await axios.get(`http://localhost:3000/api/categories`)
                .then(response => {
                    this.book.categories = response.data.categories;
                    console.log(response.data);

                }).catch(e => {
                    this.errors.push(e)
                });

            await axios.get(`http://localhost:3000/api/owners`)
                .then(response => {
                    this.book.owners = response.data.owners;
                    console.log(response.data);

                }).catch(e => {
                    this.errors.push(e)
                });

            await axios.get(`http://localhost:3000/api/books/${this.$route.params.id}`)
                .then(response => {
                    this.book.id = response.data.book;

                }).catch(e => {
                    this.errors.push(e)
                });

        } catch (err) {
            console.log(err);
        }
    },

    methods: {

        onChangeFile(event) {
            this.image = event.target.files[0].name;
            console.log(this.image);
        },

        async onUpdateBook(id) {
            let data = {
                categoryID: this.book.id.category,
                ownerID: this.book.id.owner._id,
                title: this.book.id.title,
                price: this.book.id.price,
                description: this.book.id.description,
                quantity: this.book.id.quantity,
                image: this.book.image,
            }
            await axios.put(`http://localhost:3000/api/books/${id}`, data);
            this.message = "Cập nhật sách thành công";
            this.$router.push({ name: "home" });
        },

        async onAddBook() {
            let data = {
                categoryID: this.book.categoryID,
                ownerID: this.book.ownerID,
                title: this.book.title,
                price: this.book.price,
                description: this.book.description,
                quantity: this.book.quantity,
                image: this.book.image,
            }
            await axios.post(`http://localhost:3000/api/books`, data);
            this.message = "Thêm sách thành công";

        },
    }
}
</script>

<style  >
.main-container {
    background-image: url("/backgroundd.jpg");
    background-repeat: no-repeat;
}

label {
    font-family: sans-serif;
    font-size: 1rem;
    padding-right: 10px;
}

select {
    font-size: .9rem;
    padding: 2px 5px;
}
</style>