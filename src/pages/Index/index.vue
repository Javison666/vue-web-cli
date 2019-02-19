<template>
    <div>
        <button @click="confirm">确认提示窗</button>
    </div>
</template>

<script>

// @ is an alias to /src
export default {
    methods:{
        async confirm(){
            await this.$confirm({
                title:'确认该操作',
            })
            alert('点击了确认')
        }
    }
};
</script>

<style lang="scss" scoped>

</style>