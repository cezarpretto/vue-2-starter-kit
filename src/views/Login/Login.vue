<template>
  <div>
    <section>
      <div class="row">
        <div class="col-sm-12">
          <div class="login-logo">
            <a href="#/"><b>Qualifica</b>Web</a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 col-sm-offset-4">
          <div class="login-box-body">
            <p class="login-box-msg">Logar para acessar o sistema</p>

            <form v-on:submit.prevent="logar()" novalidate>
              <div class="form-group has-feedback">
                <input-cpf v-model="cpf" placeholder="Usuário" icon="glyphicon glyphicon-envelope form-control-feedback"></input-cpf>
              </div>
              <div class="form-group has-feedback">
                <input type="password" class="form-control" placeholder="Senha">
                <span class="glyphicon glyphicon-lock form-control-feedback"></span>
              </div>
              <div class="row">
                <div class="col-xs-4 col-xs-offset-8">
                  <button type="submit" class="btn btn-primary btn-block btn-flat">Entrar</button>
                </div>
                <!-- /.col -->
              </div>
            </form>
            
            <a href="#">Esqueci minha senha</a><br>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script src="./Login.js" charset="utf-8"></script>
