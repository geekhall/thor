<template>
  <div class="container">
    <h1>Charts</h1>
    <Bar :data="data" :options="options" />
    <hr />
    <Bar :data="bar_data" :options="bar_options" />
    <hr />
    <Bubble :data="bubble_data" :options="bubble_options" />
  </div>
</template>

<script lang="ts" setup>
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  PointElement,
  LinearScale
} from 'chart.js'
import { Bar, Bubble } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, PointElement, Legend)

const data = {
  loaded: false,
  labels: ['January', 'February', 'March'],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: '#345678',
      data: [40, 20, 12]
    }
  ]
}
const options = {
  responsive: true
}

const bar_data = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ],
  datasets: [
    {
      label: 'Data Two',
      backgroundColor: '#f87979',
      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
    }
  ]
}

const bar_options = {
  responsive: true
}

const bubble_data = {
  datasets: [
    {
      label: 'Bubble Data One',
      backgroundColor: '#f87979',
      data: [
        {
          x: 20,
          y: 25,
          r: 5
        },
        {
          x: 40,
          y: 10,
          r: 10
        },
        {
          x: 30,
          y: 22,
          r: 30
        }
      ]
    },
    {
      label: 'Bubble Data Two',
      backgroundColor: '#7C8CF8',
      data: [
        {
          x: 10,
          y: 30,
          r: 15
        },
        {
          x: 20,
          y: 20,
          r: 10
        },
        {
          x: 15,
          y: 8,
          r: 30
        }
      ]
    }
  ]
}

const bubble_options = {
  responsive: true
}
</script>
