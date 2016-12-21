function limparCPF(cpf){
  if(cpf !== undefined){
    return cpf.replace(/[^0-9]+/g, '').substring(0, 11);
  }
}

function limparMascara(cpf){
  if(cpf !== undefined){
    return cpf.replace(/[^0-9]+/g, '');
  }
}

function dataParaBack(data){
  let aux = data.split('/');
  return new Date(aux[2], aux[1] -1, aux[0]);
}

function formatarCPF(cpf){
  if(cpf !== undefined){
    let retorno = '';
    if(cpf.length > 3){
      retorno = cpf.substring(0, 3) + '.' + cpf.substring(3);
    }
    if(cpf.length > 6){
      retorno = cpf.substring(0, 3) + '.' + cpf.substring(3);
      retorno = retorno.substring(0, 7) + '.' + retorno.substring(7);
    }
    if(cpf.length > 10){
      retorno = cpf.substring(0, 3) + '.' + cpf.substring(3);
      retorno = retorno.substring(0, 7) + '.' + retorno.substring(7);
      retorno = retorno.substring(0, 11) + '-' + retorno.substring(11, 13);
    }
    return retorno;
  }
}

function findVModelName(vnode) {
  return vnode.data.directives.find(function(o) {
  	return o.name === 'model';
  }).expression;
};

function addPontos(value) {
  // let retorno = '';
  // if(value.length > 3){
  //   let count = 0;
  //   for (var i = 0; i < value.length; i++) {
  //     count++;
  //     retorno += value[i];
  //     if(count == 3){
  //       count = 0;
  //       retorno += `.${value[i]}`;
  //     }
  //   }
  // }
  return value;
};

function limparDinheiro(value) {
  if(typeof value === 'number'){
    return value;
  }
  value = value.replace(/\./g, '');
  value = value.replace(',', '.');
  return parseFloat(value);
};

function validarCpf(strCPF) {
  var Soma;
  var Resto;
  var regex = /^(\d)\1+$/;
  Soma = 0;
  if (strCPF === undefined) return false;
  if (regex.test(strCPF)) return false;
	// if (strCPF == "00000000000") return false;

	for (var i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
	Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;

	Soma = 0;
    for (var i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}

export { limparCPF, dataParaBack, formatarCPF, findVModelName, addPontos, limparMascara, limparDinheiro, validarCpf };
