<template>
    <div class="progress">
        <el-progress :show-text="false" :stroke-width="24" :percentage="30" />
    </div>
    <h1>質問</h1>
    <h1>何色が好きですか？</h1>
    <div class="buttons">
        <el-row>
            <el-button size='large' >赤</el-button>
        </el-row>
        <el-row>
            <el-button>黄色</el-button>
        </el-row>
        <el-row >
            <el-button class="button">青</el-button>
        </el-row>

    </div>
</template>

<style>
.progress {
    margin: 10%;
}

h1 {
    text-align: center;
}

.buttons {
    text-align: center;
}

button{
    font-size: ;
    margin-top: 10%;
    width: 10em;
}
</style>