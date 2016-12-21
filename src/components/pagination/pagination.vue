<template>
  <div>
    <nav aria-label="Page navigation">
      <ul class="pagination pagination-sm">
        <li :class="{'disabled': source.page === 1}">
          <a href="#" aria-label="Previous" v-on:click.prevent="navigate($event, source.page - 1)">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li v-for="page in pages" track-by="$index" :class="{'active': source.page === page}" v-on:click.prevent="navigate($event, page)"><a href="#">{{page}}</a></li>
        <li :class="{'disabled': source.page === source.pages}">
          <a href="#" aria-label="Next" v-on:click.prevent="navigate($event, source.page + 1)">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { range } from 'lodash';

export default {
  props: ['source', 'event'],
  data() {
    return {
      pages: [],
      eventName: ''
    }
  },
  mounted() {
    let s = this.source;
    this.pages = this.generatePagesArray(s.page, s.rows, s.limit, 12);
    if(this.event === undefined){
      this.eventName = 'navigate';
    }else{
      this.eventName = this.event;
    }
    // console.log(this.eventName);
  },
  methods: {
    navigate(ev, page) {
      if(page === 0 || page === this.source.pages +1){
        return false;
      }
      this.$events.emit(this.eventName, page);
    },

    generatePagesArray: function(currentPage, collectionLength, rowsPerPage, paginationRange){
      var pages = [];
      var totalPages = Math.ceil(collectionLength / rowsPerPage);
      var halfWay = Math.ceil(paginationRange / 2);
      var position;

      if (currentPage <= halfWay) {
          position = 'start';
      } else if (totalPages - halfWay < currentPage) {
          position = 'end';
      } else {
          position = 'middle';
      }

      var ellipsesNeeded = paginationRange < totalPages;
      var i = 1;
      while (i <= totalPages && i <= paginationRange) {
          var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
          var openingEllipsesNeeded = (i === 2 && (position === 'middle' || position === 'end'));
          var closingEllipsesNeeded = (i === paginationRange - 1 && (position === 'middle' || position === 'start'));
          if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
              pages.push('...');
          } else {
              pages.push(pageNumber);
          }
          i ++;
      }
      return pages;
    },

    calculatePageNumber: function(i, currentPage, paginationRange, totalPages){
      var halfWay = Math.ceil(paginationRange/2);
      if (i === paginationRange) {
          return totalPages;
      } else if (i === 1) {
          return i;
      } else if (paginationRange < totalPages) {
          if (totalPages - halfWay < currentPage) {
          return totalPages - paginationRange + i;
      } else if (halfWay < currentPage) {
          return currentPage - halfWay + i;
      } else {
          return i;
      }
      } else {
          return i;
      }
    }
  },
  watch: {
    source() {
      let s = this.source;
      this.pages = this.generatePagesArray(s.page, s.rows, s.limit, 12);
    }
  }
}
</script>
