export class Settoken{
    static readonly type='[Auth] token';
    constructor(public data:string){}
}

export class SetUser{
    static readonly type='[Auth] User';
    constructor(public data:any){}
}

export class Logout{
    static readonly type='[Auth] Logout';
}

export class isAuth{
    static readonly type='[Auth] isAuth';
    constructor(public data:boolean){}
}