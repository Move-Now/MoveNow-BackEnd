import { pool } from "../database/database.js";
//TODO atualizar os campos com base no novo banco
export class Order {
  
  async getOrder(req, res){
    const result = await pool.query('SELECT * FROM carreto');

    return res.status(200).send(result[0])
  };

  async getOrderItens(req, res){
    const {id} = req.params;
    const result = await pool.query('SELECT * FROM item WHERE id_carreto = ?', [id]);

    return res.status(200).send(result[0])
  };

  async createOrder(req, res){
    //pegar dados para carreto
    const {origem, destino, itens} = req.body;
    await pool.query('INSERT INTO carreto (origem, destino) VALUES (?, ?)', [origem, destino]);
    //pegar ID do último item adicionado
    const getOrderId = await pool.query('SELECT last_insert_id()');
    const orderId = getOrderId[0][0]['last_insert_id()'];

    //dados de itens
     for (const itemKey in itens) {
        const item = itens[itemKey];

        const {nomeItem, peso, volume} = item;
      
        await pool.query('INSERT INTO item (id_carreto, nome, peso, volume) VALUES (?, ?, ?, ?)', [orderId, nomeItem, peso, volume]);
     }

    return res.status(201).send('Solicitação de Carreto enviada com Sucesso!')


  };

  async updateOrder(req, res){

  };

  async getUserById(req, res){
    const {id} = req.params;
    const result = await pool.query('SELECT * FROM usuario WHERE id_cliente = ?', [id]);

    return res.status(200).send(result[0])
  };


};              