<template>
  <div id="app">
    <x-header></x-header>
    <article class="index-article">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus doloremque possimus culpa, ipsam, quod aspernatur inventore itaque doloribus iste error voluptates quam tenetur omnis amet animi dolorem, soluta perferendis porro!</p>
      <p>Nemo eos vel doloremque atque assumenda natus blanditiis delectus vitae, repellendus numquam impedit, alias molestiae debitis provident reprehenderit praesentium. In, asperiores! Tenetur impedit excepturi quos aperiam sit, voluptatem deleniti quam?</p>
      <p>Cumque voluptatum eius temporibus, neque, repellat sapiente odio sequi! Debitis accusamus quas odit iste atque ad ratione eos, officia sint eum, quis hic odio culpa, perferendis, nemo! Ipsum facilis, alias.</p>
      <p>Assumenda in ea neque temporibus adipisci! Optio, dignissimos! Libero iure corrupti a doloremque impedit vel nemo tempore ex eveniet perferendis, quibusdam, dignissimos necessitatibus id vero? Expedita dolorum error fugiat aspernatur.</p>
      <p>Velit, quibusdam enim voluptatibus! Unde quibusdam amet consequuntur ipsam. Sint similique neque error magnam sapiente temporibus, incidunt optio saepe, perspiciatis voluptas voluptatem blanditiis dolorum, impedit deleniti, omnis et cupiditate a.</p>
      <p>Beatae autem, deleniti quis earum tempora adipisci? Molestiae quibusdam laborum ipsam culpa. Aut deleniti saepe sunt impedit a facilis vel, temporibus dolorum fugiat, voluptatibus illo ipsum dolor odio corrupti, voluptatem.</p>
      <p>Odio totam cum quasi provident at, dicta in sunt maxime illum eos molestias incidunt voluptas itaque nulla consequatur quaerat quisquam adipisci, velit aliquid pariatur. Deleniti at nihil aperiam dolores quod?</p>
      <p>Possimus, non doloribus doloremque perspiciatis aut illo, aliquid exercitationem libero quo voluptatem. Vero molestias nostrum fuga quia rerum ducimus animi accusantium obcaecati, quo quaerat dolores quibusdam, possimus amet cum eligendi?</p>
    </article>
    <tabbar></tabbar>
  </div>
</template>

<script>
  import XHeader from 'common-components/header';
  import Tabbar from 'common-components/tabbar';
  import { Datetime } from 'vux/src/components';

  export default {
    data(){
      return {
        
      }
    },
    components: { XHeader,Tabbar }
  }

</script>

<style lang="scss">
  @import '~vux/dist/vux.css';

  .weui_mask_transparent{top: 100px !important;}

  .index-article{
    position: absolute;
    top: 46px;
    bottom: 55px;
    left: 0;
    right: 0;
    padding: 12px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
</style>
