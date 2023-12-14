<template>
  <main class="flex flex-col gap-2 items-center justify-center h-screen bg-neutral-900">
    <h1 class="text-3xl font-semibold text-neutral-300">Welcome, {{ currentUser }}</h1>
    <div class="flex flex-col gap-4 pt-8 items-center">
      <!-- Display registration status here -->
      <div v-if="registrationData" class="text-neutral-200">Registration Status: {{ registrationData.status }}</div>
      <button
        type="button"
        @click="$router.push('/')"
        class="bg-blue-500 text-neutral-50 px-6 py-1 rounded hover:bg-blue-600 duration-500"
      >
        Back to Home
      </button>
      <form @submit.prevent="signOut">
        <button
          type="submit"
          class="bg-red-500 text-neutral-50 px-6 py-1 rounded hover:bg-red-700 duration-500"
        >
          Sign Out
        </button>
      </form>
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

export default {
  data() {
    return {
      registrationData: null,
    }
  },
  setup() {
    const currentUser = ref()
    const registrationData = ref(null);
    const router = useRouter()

    const getCurrentUser = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/Registration/me', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (!response.ok) {
          const errorMsg = (await response.json())?.errors[0].message
          throw new Error(errorMsg)
        }

        const user = (await response.json())?.user
        console.log(user)
        return user
      } catch (error) {
        alert('Sign In Error ' + error.message)
      }
    }

    const getRegistrationData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/Registration/me', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (!response.ok) {
          const errorMsg = (await response.json())?.errors[0].message
          throw new Error(errorMsg)
        }

        const data = await response.json();
        registrationData.value = data.user;
        return data.user;
      } catch (error) {
        alert('Sign In Error ' + error.message)
      }
    }

    const onMountedHandler = async () => {
      currentUser.value = (await getCurrentUser())?.name
      if (!currentUser.value) {
        router.replace('/signin')
      }
      await getRegistrationData();
    }

    onMounted(onMountedHandler)

    const signOut = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/Registration/logout', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (!response.ok) {
          const errorMsg = (await response.json())?.errors[0].message
          throw new Error(errorMsg)
        }

        router.push('/signin')
      } catch (error) {
        alert('Log Out Error ' + error.message)
      }
    }

    return {
      currentUser,
      registrationData,
      signOut
    }
  },
}
</script>
