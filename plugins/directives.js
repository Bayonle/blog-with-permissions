


import Vue from 'vue'
import Auth from '@/services/auth'
import usersData from '@/data/users'

let user = usersData.users.find(x => x.username === 'andy');
let auth = new Auth(user)


Vue.directive('can-do', {
    bind: function (el, binding, vnode) {
        if(!auth.can(binding.value)){
            commentNode(el, vnode)
        }
    }
})

/**
 * Create comment node
 *
 * @private
 * @author https://stackoverflow.com/questions/43003976/a-custom-directive-similar-to-v-if-in-vuejs#43543814
 */
function commentNode(el, vnode) {
    const comment = document.createComment(' ')

    Object.defineProperty(comment, 'setAttribute', {
        value: () => undefined
    })

    vnode.text = ' '
    vnode.elm = comment
    vnode.isComment = true
    vnode.context = undefined
    vnode.tag = undefined
    vnode.data.directives = undefined

    if (vnode.componentInstance) {
        vnode.componentInstance.$el = comment
    }

    if (el.parentNode) {
        el.parentNode.replaceChild(comment, el)
    }
}