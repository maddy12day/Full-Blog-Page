<template>
    <div class="reset-password">
        <Modal v-if="modalActive" v-on:close-modal="closeModal" :modalMessage = "modalMessage" />
        <Loading v-if="loading"/>
        <div class="form-wrap">
            <form class="reset">
                <p class="login-register">
                    Back to 
                    <router-link class="router-link" :to="{ name: 'Login' }">Login</router-link> page
                </p>
                <h2>Reset Password</h2>

                <p>Forgot your password? Please enter your email to reset it</p>
                <div class="inputs">
                    <div class="input">
                        <input type="text" placeholder="Email" v-model="email"/>
                        <email class="icon"></email>
                    </div>
                </div>
                <button @click.prevent = "resetPassword">Reset</button>
                <div class="angle"></div>
            </form>
            <div class="background"></div>
        </div>
    </div>
</template>

<script>
import email from "../assets/Icons/envelope-regular.svg";
import Loading from '../component/Loading.vue';
import Modal from '../component/Modal.vue';
import firebase from "firebase/app";
import "firebase/auth";
    export default {
        name: "ForgotPassword",
        components:{email,Modal, Loading,},
        data(){
            return{
                email:null,
                modalActive:false,
                modalMessage:"",
                loading: null,
            }
        },
        methods:{
            closeModal(){
                this.modalActive = ! this.modalActive;
                this.email = "";
            },
            resetPassword(){
                this.loading = true;
                firebase.auth().sendPasswordResetEmail(this.email).then(()=>{
                    this.modalMessage = "You will recieve an email to reset your password on your registered email adderess";
                    this.loading = false;
                    this.modalActive = true;
                }).catch(err =>{
                    this.modalMessage = err.message;
                    this.loading = false;
                    this.modalActive = true;
                })

            }
        }
    }
</script>

<style lang="scss" scoped>
.reset-password{
    position: relative;
    .form-wrap{
        .reset{
            h2{
                margin-bottom: 8px;
            }
            p{
                text-align: center;
                margin-bottom: 32px;
            }
        }
    }
}
</style>