export default class Auth {

    constructor(user) {
        this.user = user
    }

    permissions() {
        return this.user.role.permissions.map(x => x.name);
    }

    can(permission) {
        let userPermissions = this.permissions();
        return userPermissions.includes(permission);
    }
}