"use strict";var openPopup=document.querySelector(".contacts-btn"),popup=document.querySelector(".modal"),closePopup=popup.querySelector(".modal-close"),login=popup.querySelector("[name=feedback-name]"),form=popup.querySelector(".modal-form"),email=form.querySelector("[type=email]"),storage="",isStorageSupport=!0,showPopup=function(){popup.classList.add("modal-show"),storage?(login.value=storage,email.focus()):login.focus()};try{storage=localStorage.getItem("login")}catch(o){isStorageSupport=!1}window.addEventListener("keydown",function(o){27===o.keyCode&&(o.preventDefault(),popup.classList.contains("modal-show")&&popup.classList.remove("modal-show"))}),openPopup.addEventListener("click",function(){showPopup()}),openPopup.addEventListener("keydown",function(o){32!==o.keyCode&&13!==o.keyCode||showPopup()}),closePopup.addEventListener("click",function(o){popup.classList.remove("modal-show")}),form.addEventListener("submit",function(o){login.value&&email.value?isStorageSupport&&localStorage.setItem("login",login.value):(o.preventDefault(),popup.classList.add("modal-error"))});