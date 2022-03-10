<template>
      <div class="container table-bg">
        <div class="card">
          <div class="card-header" >
                            <h5>Billing history</h5>
                             <p class="card-text">Choose a billing plan to see more details.</p>
                        </div>
          <div class="card-body">
              <table class="table">
      <thead>
      <tr>
      <th scope="col">Date</th>
      <th scope="col">Type</th>
      <th scope="col">Amount</th>
      <th scope="col">Balance</th>
      <th scope="col">Reference</th>
      <th scope="col">Download</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <th scope="row">13 Dec 2021</th>
      <td>Invoice</td>
      <td>R8.00</td>
      <td>R45.00</td>
      <td>8993UDEJ</td>
      <td> <fa icon="download" /> </td>

      </tr>
      <tr>
      <th scope="row">13 Dec 2021</th>
      <td>Invoice</td>
      <td>R8.00</td>
      <td>R45.00</td>
      <td>8993UDEJ</td>
      <td> <fa icon="download" /> </td>
      </tr>
      <tr>
      <th scope="row">13 Dec 2021</th>
      <td>Invoice</td>
      <td>R8.00</td>
      <td>R45.00</td>
      <td>8993UDEJ</td>
      <td> <fa icon="download" /> </td>
      </tr>
      <tr>
      <th scope="row">13 Dec 2021</th>
      <td>Invoice</td>
      <td>R8.00</td>
      <td>R45.00</td>
      <td>8993UDEJ</td>
      <td> <fa icon="download" /> </td>
      </tr>
      </tbody>
      </table>
          </div>
        </div>
      </div>

</template>

<script>
export default {
    name: 'Table'
}
</script>

<style scoped>
.card-header {
    background-color: #ffffff
}
.table-bg{
    background-color: #eeeeef;
}
</style>