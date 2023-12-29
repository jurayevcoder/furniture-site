<template>
    <header class="fixed z-10 shadow-lg w-full bg-[#A7C5BD] transition duration-1000">
        <div class="container mx-auto px-5">
            <nav class="w-full flex items-center justify-between py-5">
                <div>
                    <a href="#" class="flex items-center">
                        <h1 class="text-[24px] w-[100px] text-[#3B3B98] font-bold">Logo</h1>
                    </a>
                </div>
                <div class="hidden lg:block">
                    <ul class="flex items-center gap-8 text-[16px] font-bold">
                        <li class="textLi p-2 text-[#E2E8F0] hover:text-white">
                            <a href="#home">Home</a>
                        </li>
                        <li class="textLi p-2 text-[#E2E8F0] hover:text-white">
                            <a href="#about">About Us</a>
                        </li>
                        <li class="textLi p-2 text-[#E2E8F0] hover:text-white">
                            <a href="#project">Catalog</a>
                        </li>
                        <li class="textLi p-2 text-[#E2E8F0] hover:text-white">
                            <a href="#price">Contact</a>
                        </li>
                    </ul>
                </div>
                <div class="lg:hidden reletive">
                    <button @click="toggleMenu" class="flex p-1 rounded-lg focus:ring-2 focus:ring-[#3B3B98]">
                        <i class='text-[24px] text-white font-bold' :class="menu ? 'bx bx-x' : 'bx bx-menu'"></i>
                    </button>
                    <ul class="absolute bg-[#A7C5BD] w-[60%] sm:w-[40%] h-[100vh] right-0 top-[76px] text-white font-bold text-[18px]"
                        :class="menu ? 'bloc' : 'hidden'">
                        <li class="p-2 pl-5 text-[#E2E8F0] hover:text-white mb-5">
                            <a href="#home" @click="closeMenu">Home</a>
                        </li>
                        <li class="p-2 pl-5 text-[#E2E8F0] hover:text-white mb-5">
                            <a href="#about" @click="closeMenu">About Us</a>
                        </li>
                        <li class="p-2 pl-5 text-[#E2E8F0] hover:text-white mb-5">
                            <a href="#project" @click="closeMenu">Catalog</a>
                        </li>
                        <li class="p-2 pl-5 text-[#E2E8F0] hover:text-white mb-5">
                            <a href="#price" @click="closeMenu">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue';
const menu = ref(false);
const toggleMenu = () => (menu.value = !menu.value);
const closeMenu = () => (menu.value = false);

const a = localStorage.getItem("check");
const lamp = ref(false)
if (a == "ok") {
    lamp.value = true;
}

window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    header.classList.toggle("headerText", window.scrollY > 0)
    header.classList.toggle("backdrop-blur-sm", window.scrollY > 0)
    header.classList.toggle("bg-white/5", window.scrollY > 0)
})
</script>

<style lang="css" scoped>
.router-link-exact-active {
    color: #3B3B98;
}

.headerText .textLi {
    color: #3B3B98;
    transition: 1s;
}

.headerText .textLi:hover {
    border-bottom: 1px solid #3B3B98;
}
</style>