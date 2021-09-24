<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Test' }">活动管理</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <el-divider></el-divider>
  <el-row>
    <el-button type="primary">查询</el-button>
    <el-button type="primary">修改</el-button>
  </el-row>
  <el-table
    class="table"
    :data="tableData"
    :row-class-name="tableRowClassName"
    border
    style="width:fit-content"
  >
    <el-table-column fixed prop="date" label="日期" width="100"></el-table-column>
    <el-table-column prop="name" label="姓名" width="100"></el-table-column>
    <el-table-column prop="province" label="省份" width="120"></el-table-column>
    <el-table-column prop="city" label="市区" width="120"></el-table-column>
    <el-table-column prop="address" label="地址" width="450"></el-table-column>
    <el-table-column prop="zip" label="邮编" width="120"></el-table-column>
    <el-table-column label="操作" width="300px">
      <template #default="scope">
        <el-button @click="Look(scope.row)" size="small">查看</el-button>
        <el-button @click="edit(scope.row)" type="primary" size="small">编辑</el-button>
        <el-button @click="del(scope.row)" type="danger" size="small">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog
    :before-close="handleClose"
    :append-to-body="true"
    title="详情信息"
    :modal="true"
    v-model="dialogFormVisible"
    top="5vh"
  >
    <div>
      <el-tag type="info">日期</el-tag>
      <label class="info" for>{{ tableData[index].date }}</label>
      <br />
      <el-tag type="info">姓名</el-tag>
      <label class="info" for>{{ tableData[index].name }}</label>
      <br />
      <el-tag type="info">市区</el-tag>
      <label class="info" for>{{ tableData[index].city }}</label>
      <br />
      <el-tag type="info">省份</el-tag>
      <label class="info" for>{{ tableData[index].province }}</label>
      <br />
      <el-tag type="info">住址</el-tag>
      <label class="info" for>{{ tableData[index].address }}</label>
      <br />
      <el-tag type="info">邮编</el-tag>
      <label class="info" for>{{ tableData[index].zip }}</label>
      <br />
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </span>
    </template>
  </el-dialog>
  <el-dialog title="编辑信息" v-model="dialogEditVisible" :before-close="handleClose" top="5vh">
    <el-form label-position="left" label-width="100px" :model="tableData">
      <el-form-item class="tip" label="日期">
        <el-input class="ins" v-model="tableData[index].date"></el-input>
      </el-form-item>
      <el-form-item class="tip" label="姓名">
        <el-input class="ins" v-model="tableData[index].name"></el-input>
      </el-form-item>
      <el-form-item class="tip" label="省份">
        <el-input class="ins" v-model="tableData[index].province"></el-input>
      </el-form-item>
      <el-form-item class="tip" label="市区">
        <el-input class="ins" v-model="tableData[index].city"></el-input>
      </el-form-item>
      <el-form-item class="tip" label="地址">
        <el-input class="ins" v-model="tableData[index].address"></el-input>
      </el-form-item>
      <el-form-item class="tip" label="邮编">
        <el-input class="ins" v-model="tableData[index].zip"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="close">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="js">
import { ElMessageBox } from 'element-plus';
import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
  },
  setup() {
    // 获取数据
    const tableData = reactive([{
      date: '2016-05-03',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-02',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-04',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-01',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-08',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-06',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }, {
      date: '2016-05-07',
      name: '王小虎',
      province: '上海',
      city: '普陀区',
      address: '上海市普陀区金沙江路 1518 弄',
      zip: 200333
    }])
    // 定义一些状态
    const index = ref()
    const dialogFormVisible = ref(false)
    const dialogEditVisible = ref(false)
    // 在关闭dialog之前弹出提示框，是否关闭
    const handleClose = (done) => {
      ElMessageBox.confirm('确认关闭？')
        .then(() => {
          done();
        })
        .catch((err) => {
          console.log(err);
        });
    }
    // 给每行数据添加索引 index
    const tableRowClassName = ({ row, rowIndex }) => {
      row.row_index = rowIndex
    }
    // 查看数据
    const Look = (row) => {
      dialogFormVisible.value = true
      index.value = row.row_index
    }
    // 编辑数据
    const edit = (row) => {
      dialogEditVisible.value = true
      index.value = row.row_index
    }
    // 删除数据
    const del = (row) => {
      index.value = row.row_index
      tableData.splice(row.row_index, 1)
    }
    // 编辑 关闭保存之后上传数据
    const close = () => {
      dialogEditVisible.value = false
    }
    return {
      tableData,
      index,
      dialogFormVisible,
      dialogEditVisible,

      Look,
      edit,
      del,
      handleClose,
      close,
      tableRowClassName,
    }
  }
});
</script>
<style>
.el-main {
  line-height: 10px;
}

.table {
  margin: 25px auto 0px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.el-table__header col[name="gutter"] {
  display: table-cell !important;
}

.el-table .el-table__cell {
  text-align: center;
}

.el-dialog {
  height: 800px;
}

.el-dialog__footer {
  position: absolute;
  bottom: 25px;
  right: 25px;
}

.el-tag {
  margin: 20px 0px 20px 200px;
}

.info {
  margin: 0px 0px 0px 50px;
}

.el-form {
  text-align: center;
}

.el-dialog__header {
  padding: 25px;
}

.tip {
  margin: 30px 0px 0px 250px;
}

.ins {
  width: 300px;
}
.el-form-item__content {
  flex: 0;
}
</style>
