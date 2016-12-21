<template>
  <div>
    <section class="content-header">
      <h1>
        <i :class="icon"></i>
        {{title}}
        <small>{{subtitle}}</small>
      </h1>
      <!-- <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active">Dashboard</li>
      </ol> -->
    </section>
  </div>
</template>
<script type="text/javascript">
  export default {
    props: ['title', 'subtitle', 'icon']
  }
</script>
