import Auth from '@/services/auth'
import usersData from '@/data/users'

export default ({ app }, inject) => {
    console.log(usersData.users[0].username)
    let user = usersData.users.find(x => x.username === 'andy');
    inject('auth', new Auth(user))
}
