<template>
    <div class="w-2/3 mx-auto px-48 py-16">
        <post-with-v-if v-for="(post, index) in posts" :key="index" :post="post" />
    </div>
</template>

<script>
import posts from '@/data/posts'
import comments from '@/data/comments'
import PostWithVIf from '@/components/PostWithVIf'
import PostWithDirective from '@/components/PostWithDirective'
import PostWithComponent from '@/components/PostWithComponent'
export default {
    data(){
        return {
            posts,
            comments
        }
    },
    components:{
        PostWithVIf,
        PostWithDirective,
        PostWithComponent,
    }

}
</script>