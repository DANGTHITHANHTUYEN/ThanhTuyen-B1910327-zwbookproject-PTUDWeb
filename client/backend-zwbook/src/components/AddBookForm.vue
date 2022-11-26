<template>
    <form>
        <div class="mb-3">

            <span>Danh mục:</span>
            <select v-if="bookLocal.id._id" class="w-100" name="danhmuc" id="danhmuc" v-model="bookLocal.id.category">
                <option v-for="category in book.categories" :value="category._id" :key="category._id">
                    {{ category.type }}</option>
            </select>

            <select v-else class="w-100" name="danhmuc" id="danhmuc" v-model="bookLocal.categoryID">
                <option v-for="category in book.categories" :value="category._id" :key="category._id">
                    {{ category.type }}</option>
            </select>
        </div>

        <div class="mb-3">
            <span>Tác giả:</span>
            <select v-if="bookLocal.id._id" class="w-100 " name="tacgia" id="tacgia" v-model="bookLocal.id.owner._id">
                <option v-for="owner in book.owners" :value="owner._id" :key="owner._id"> {{ owner.name }}</option>
            </select>

            <select v-else class="w-100 " name="tacgia" id="tacgia" v-model="bookLocal.ownerID">
                <option v-for="owner in book.owners" :value="owner._id" :key="owner._id"> {{ owner.name }}</option>
            </select>
        </div>

        <div class="mb-3">
            <label for="tuasach" class="form-label">Tựa sách</label>
            <input v-if="bookLocal.id._id" type="text" class="form-control" id="tuasach" v-model="bookLocal.id.title">
            <input v-else type="text" class="form-control" id="tuasach" v-model="bookLocal.title">
        </div>

        <div class="mb-3">
            <label for="gia" class="form-label">Giá</label>
            <input v-if="bookLocal.id._id" type="text" class="form-control" id="gia" v-model="bookLocal.id.price"
                :placeholder="bookLocal.id.price">

            <input v-else type="text" class="form-control" id="gia" v-model="bookLocal.price">
        </div>

        <div class="mb-3">
            <label for="soluong" class="form-label">Số lượng</label>
            <input v-if="bookLocal.id._id" type="text" class="form-control" id="soluong"
                v-model="bookLocal.id.quantity">
            <input v-else type="text" class="form-control" id="soluong" v-model="bookLocal.quantity">
        </div>

        <div class="mb-3">
            <label for="mota" class="form-label">Mô tả </label>
            <textarea v-if="bookLocal.id._id" class="w-100" id="mota" v-model="bookLocal.id.description"> </textarea>
            <textarea v-else class="w-100" id="mota" placeholder="Mô tả một chút chi tiết về cuốn sách"
                v-model="bookLocal.description"> </textarea>
        </div>

        <div class="mb-3">
            <label for="anh" class="form-label">Ảnh sách </label>
            <input type="file" class="form-control" id="anh" @change="onChangeFile">
        </div>

        <div class="mb-3 text-center">
            <button v-if="bookLocal.id._id" type="submit" class="btn btn-primary" @click="submitUpdateBook">Cập nhật
            </button>
            <button v-else type="submit" class="btn btn-primary" @click="submitAddBook">Thêm sách </button>
        </div>

    </form>

</template>
<script>
export default {
    emits: ["submit:book",],
    props: {
        book: { type: Object, required: true }
    },
    data() {
        return {
            bookLocal: this.book,
        };
    },

    methods: {
        onChangeFile(event) {
            this.book.image = event.target.files[0].name;
            console.log(this.book.image);
        },
        submitAddBook() {
            this.$emit("submit:book", this.bookLocal);
        },
        submitUpdateBook() {
            this.$emit("submit:book", this.bookLocal);
        },
    },
}

</script>