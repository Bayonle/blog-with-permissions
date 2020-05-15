<template>
    <div class="w-full mb-10">
        <h1 class="text-xl font-bold text-black">{{post.title}}</h1>
        <p>{{post.body}}</p>
        <div class="mt-5">
            <!-- <span v-html="status"></span> -->
            <span class=" bg-orange-100 text-yellow-800 px-1 py-1 text-sm">Pending review</span>
        </div>
        <div class="flex items-center">

        </div>
        <button>Review</button>
        <button>Approve</button>
        <button>Publish</button>
    </div>
</template>

<script>
export default {
    computed:{
        status(){
            if(this.post.status === 'pending_review'){
                return `spa`
            }
        }
    },
    props:{
        post:{
            type: Object,
            default: () => {}
        }
    }
}
</script>