<script>
import { Doughnut } from 'vue-chartjs';
export default {
   extends: Doughnut,
   props: ['chartData', 'options'],
   mounted(){
       this.renderChart(this.chartData, this.options);
   }
}
</script>
<style lang="scss" scoped>
    // Bar,
    // HorizontalBar,
    // Doughnut,
    // Line,
    // Pie,
    // PolarArea,
    // Radar,
    // Bubble,
    // Scatter,
    // generateChart
</style>