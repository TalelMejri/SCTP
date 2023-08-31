import { Action, Selector, State, StateContext } from "@ngxs/store";
import { User } from "../Models/User";
import { Injectable } from "@angular/core";
import {  SetUser,Settoken,isAuth,Logout} from "./state";
export class AuthModel{
    isAuth:boolean=false;
    token:string|undefined|null;
    User:User|null|undefined
}

@State<AuthModel>({
    name:"AuthStore",
    defaults:{
        isAuth:false,
        User:null,
        token:null
    }
})

@Injectable()
export class AuthStore{
    @Selector()
    static isAuth(state:AuthModel){
        return state.isAuth;
    }

    @Selector()
    static User(state:AuthModel){
        return state.User;
    }

    @Selector()
    static token(state:AuthModel){
        return state.token;
    }

    @Action(Settoken)
    Settoken({getState,patchState}:StateContext<AuthModel>,{data}:Settoken){
        patchState({
            token:data
        })
    }

    @Action(SetUser)
    SetUser({getState,patchState}:StateContext<AuthModel>,{data}:SetUser){
        patchState({
            User:data
        })
    }

    @Action(isAuth)
    isAuth({getState,patchState}:StateContext<AuthModel>,{data}:isAuth){
        patchState({
            isAuth:data
        })
    }

    @Action(Logout)
    Logout({getState,patchState}:StateContext<AuthModel>){
        patchState({
            isAuth:false,
            token:null,
            User:null
        })
    }
    
}