<template>
    <div class="w-full mb-10">
        <h1 class="text-xl font-bold text-black">{{post.title}}</h1>
        <p>{{post.body}}</p>
        <div class="mt-5" v-html="status">
            <!-- <span v-html="status"></span> -->
        </div>
        <div class="flex items-center mt-5">
            <button v-if="$auth.can('review_post')"  @click="review" class="rounded px-4 py-2 text-sm bg-blue-500 text-white">Review</button>
            <button v-if="$auth.can('approve_post')"  @click="approve" class="rounded px-4 py-2 text-sm bg-blue-500 text-white mx-3">Approve</button>
            <button v-if="$auth.can('publish_post')" @click="publish" class="rounded px-4 py-2 text-sm bg-blue-500 text-white">Publish</button>
        </div>
    </div>
</template>

<script>
import CanDo from '@/components/CanDo'
export default {
    components:{
        CanDo
    },
    data(){
        return {
            direction: 'right'
        }
    },
    computed:{
        status(){
            if(this.post.status === 'pending_review'){
                return `<span class=" bg-orange-100 text-yellow-800 px-1 py-1 text-sm">Pending review</span>`
            }
            if(this.post.status === 'pending_approval'){
                return `<span class=" bg-orange-100 text-yellow-800 px-1 py-1 text-sm">Pending approval</span>`
            }
            if(this.post.status === 'pending_publishing'){
                return `<span class=" bg-orange-100 text-yellow-800 px-1 py-1 text-sm">Pending publishing</span>`
            }
            if(this.post.status === 'published'){
                return `<span class=" bg-green-100 text-green-800 px-1 py-1 text-sm">Published</span>`
            }
        }
    },
    methods: {
        review(){
            var isPositive = confirm("Are you sure you want to review the post?")
            if(isPositive){

                console.log('reviewed')
            }
        },
        approve(){
            var isPositive = confirm("Are you sure you want to approve the post?")
            if(isPositive){
                console.log('approved')
            }
        },
        publish(){
            var isPositive = confirm("Are you sure you want to publish the post?")
            if(isPositive){
                console.log('published')
            }
        }
    },
    props:{
        post:{
            type: Object,
            default: () => {}
        }
    },
    created(){
        console.log(this.$auth)
    }
}
</script>