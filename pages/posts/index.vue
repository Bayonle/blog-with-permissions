<template>
    <div class="w-2/3 mx-auto px-48 py-16">
        <post v-for="(post, index) in posts" :key="index" :post="post" />
    </div>
</template>

<script>
import posts from '@/data/posts'
import comments from '@/data/comments'
import Post from '@/components/Post'
export default {
    data(){
        return {
            posts,
            comments
        }
    },
    components:{
        Post
    }

}
</script>