<template>
    <section
        class="w-full min-h-screen bg-no-repeat bg-cover bg-center bg-[url('https://comfort-mebel.uz/wp-content/uploads/2023/06/photo_2023-05-05_14-15-35-2.jpg')]">
        <div class="w-full min-h-screen bg-[rgba(139,136,136,0.4)] flex items-center justify-center pt-28">
            <div class="container mx-auto px-5">
                <div data-aos="zoom-in" data-aos-duration="2000" class="flex flex-col gap-10 items-center py-5 md:py-0">
                    <h1 class="text-[20px] md:text-[24px] text-[#3B3B98] font-bold px-3 bg-white">Hello, welcome to our
                        site!</h1>
                    <h2 class="text-center text-white md:text-[20px] text-[12px] bg-[#A7C5BD] p-5">
                        Lorem ipsum dolor sit
                        amet consectetur adipisicing elit.
                        Sit veritatis cum ab quis ipsum consectetur
                        libero distinctio ipsa doloribus corporis. Necessitatibus quidem nemo atque natus numquam ex harum
                        quaerat amet!
                        Nesciunt veritatis asperiores iure optio perferendis. Esse neque vero incidunt tempore dignissimos
                        debitis sunt, iste sint mollitia explicabo praesentium rerum quidem eaque exercitationem, saepe
                        dolores voluptates libero. Nisi, totam earum!
                        Accusamus molestias nihil praesentium in obcaecati provident, labore quae eum quibusdam, unde est
                        ipsa similique distinctio, laboriosam nostrum nam ratione rerum voluptatibus error? Minus illum
                        sequi veritatis? Dicta, provident blanditiis.
                        Porro sint placeat explicabo, soluta amet voluptate. Ratione placeat, asperiores vel at, aliquid
                        ipsam pariatur ea sint illo harum doloribus dolores omnis distinctio delectus libero corrupti ut ad
                        quo animi.
                        Deleniti adipisci tempore tempora repellat architecto explicabo, eos blanditiis possimus
                        necessitatibus in, hic ad, totam ex repudiandae ipsam. Accusamus, odio! Saepe id corrupti harum
                        mollitia eos, optio voluptate doloremque eum.
                    </h2>
                    <button
                        class="btnAll w-[150px] bg-[#3B3B98] py-3 text-center text-white rounded-lg font-bold hover:bg-white hover:text-[#3B3B98] hover:w-[200px] focus:ring-2 focus:ring-[#3B3B98]">See
                        All</button>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container mx-auto p-5">
            <div class="hidden lg:block w-[100%]">
                <h1 class="text-[24px] text-[#3B3B98] font-semibold mb-5">Wicker Furniture</h1>
                <div class="w-[100%] flex flex-wrap gap-[1.5%]">
                    <div v-for="item in recItemsLink" :key="item.id"
                        class="border w-[18.8%] p-5 rounded-lg flex flex-col items-center mb-5 bg-white cursor-pointer">
                        <img :src="item.img" alt="" class="w-full h-[170.67px] rounded-lg mb-[20px]" />
                        <div class="">
                            <h2 class="font-medium mb-[5px]">{{ item.price }}</h2>
                            <p class="text-[#8B96A5] font-normal w-[186px]">{{ item.info }}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="lg:hidden container mx-auto px-5">
                <h2 class="tex-[18px] text-[#3B3B98] font-semibold mb-3">Wicker Furniture</h2>
                <div class="w-[100%] flex flex-wrap gap-[2%]">
                    <div v-for="item in recItemsLink" :key="item.id"
                        class="border w-[49%] sm:w-[32%] p-5 rounded-lg flex flex-col items-center mb-2 sm:mb-3.5 bg-white cursor-pointer gap-5">
                        <img :src="item.img" alt="" class="w-[107.58px] h-[122.22px]" />
                        <div class="">
                            <h2 class="font-medium text-[16px] mb-1">{{ item.price }}</h2>
                            <p class="text-[#8B96A5] text-[13px] font-normal w-[150px]">{{ item.info }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import { recItemsLinks } from "../../store/info/rec-items"
const recItemsLink = ref(recItemsLinks);
</script>

<style lang="scss" scoped></style>