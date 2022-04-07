<template>
    <div>
        The message is: <span>{{ message }}</span>
    </div>
</template>

<script>
    export default {
        name: "TestComponent",
        props: {
            message: String
        },
    }
</script>