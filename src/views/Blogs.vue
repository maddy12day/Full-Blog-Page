<template>
    <div>
        <div class="blog-card-wrap">
            <div class="blog-card container">
                <div class="toggle-edit">
                    <span>Toogle Editing Post</span>
                    <input type="checkbox" v-model="editPost">
                </div>
                <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index"/>
            </div>
        </div>
    </div>
</template>

<script>
import BlogCard from '../component/BlogCard.vue'
    export default {
        name:'Blogs',
        components:{BlogCard},
        computed:{
            sampleBlogCards(){
            return this.$store.state.sampleBlogCards;
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>