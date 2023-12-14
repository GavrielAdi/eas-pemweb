<template>
  <main class="flex flex-col gap-2 items-center justify-center h-screen bg-neutral-900">
    <h1 class="text-3xl font-semibold text-neutral-300">
      Welcome!
      Please login to enter the site!
    </h1>
    <br />
    <div class="flex gap-4">
      <router-link to="/signin"
        ><button
          class="bg-blue-500 text-neutral-100 px-5 text-xl py-2 rounded hover:bg-blue-600 duration-500"
        >
          Login
        </button></router-link
      >
      <router-link
        to="/signup"
        class="bg-green-500 text-neutral-100 px-5 text-xl py-2 rounded hover:bg-green-600 duration-500"
        ><button>Register</button></router-link
      >
    </div>
  </main>
</template>
