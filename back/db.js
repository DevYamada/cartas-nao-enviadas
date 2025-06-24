import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

const supabaseUrl = "https://mbgozhqqtoraoamzhslt.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

async function buscarMensagem(nome = "*") {
  try {
    let query = supabase.from("mensagens").select("*").order('created_at', { ascending: false }); 
    if (nome !== "*") {
      query = query.eq("nome", nome).order('created_at', { ascending: false });
    }
    const { data, error } = await query;
    if (error) {
      console.error(error);
      return null;
    }
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function inserirMensagem(novaMensagem) {
  try {
    const { data, error } = await supabase
      .from("mensagens")
      .insert([novaMensagem]);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

export default { buscarMensagem, inserirMensagem };
