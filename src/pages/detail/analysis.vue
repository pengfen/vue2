<template>
    <div class="sales-board">
        <div class="sales-board-intro">
            <h2>流量分析</h2>
		    <p>是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
        </div>
        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                  购买数量：
                </div>
                <div class="sales-board-line-right">
                    <v-counter @on-change="onParamChange('buyNum', $event)"></v-counter>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                  产品类型：
                </div>
                <div class="sales-board-line-right">
                    <v-selection :selections="buyTypes" @on-change="onParamChange('buyType', $event)"></v-selection>
                </div>
            </div>
		</div>	
    </div>
</template>

<script>
import VSelection from '../../components/selection'
export default {
    components: {
	    VSelection
	},
    data() {
	    return {
		    buyTypes: [
				{
				  label: '入门版',
				  value: 0
				},
				{
				  label: '中级版',
				  value: 1
				},
				{
				  label: '高级版',
				  value: 2
				}
			],
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buy-dialog-title {
  font-size: 16px;
  font-weight: bold;
}
.buy-dialog-btn {
  margin-top: 20px;
}
.buy-dialog-table {
  width: 100%;
  margin-bottom: 20px;
}
.buy-dialog-table td,
.buy-dialog-table th{
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 5px 0;
}
.buy-dialog-table th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
}
</style>
