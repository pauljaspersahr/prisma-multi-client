<script lang="ts" setup>
const { data: userData } = await useAsyncData("users", () =>
  $fetch("/api/users")
);

const users = ref(userData?.value?.users || []);
</script>

<template>
  <div>
    <h1>Users</h1>
    <h2 v-for="user in users" :key="user.id">
      {{ user.email }}
    </h2>
  </div>
</template>
