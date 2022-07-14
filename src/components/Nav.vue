<template>
	<nav class="flex flex-col items-center justify-between md:flex-row">
		<MemojiLoop />
		<div
			class="mt-10 flex w-full flex-col sm:justify-between md:mt-0 md:flex-row md:justify-around"
		>
			<div
				class="order-2 mt-10 flex flex-col space-y-5 md:order-1 md:mt-0 md:flex-row md:space-y-0 lg:ml-auto lg:mr-28"
			>
				<div class="w-[200px] md:w-[150px] lg:w-[200px]">
					<p class="font-bold tracking-tight">member</p>
					<GlitchText
						class="cursor-pointer tracking-tighter"
						href="https://astranoto.com/"
						text="@astranoto"
					/>
				</div>
				<div class="w-[200px] md:w-[150px] lg:w-[200px]">
					<p class="font-bold tracking-tight">student</p>
					<GlitchText
						class="cursor-pointer tracking-tighter"
						text="engineering@unibo"
					/>
				</div>
			</div>
			<div class="order-1 flex justify-between md:order-3 md:justify-evenly">
				<div class="w-[200px] md:w-[180px] lg:w-[200px]">
					<p class="font-bold tracking-tight">Luca Corsetti</p>
					<GlitchText
						class="cursor-pointer tracking-tighter"
						text="fullstack developer"
					/>
				</div>
				<ThemeSwitcher />
			</div>
		</div>
	</nav>
</template>

<script lang="ts" setup>
import ThemeSwitcher from './ThemeSwitcher.vue';
import GlitchText from './ui/GlitchText.vue';
import MemojiLoop from './ui/MemojiLoop.vue';
</script>

<style></style>
