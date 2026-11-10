
const supabase = require('./supabase');

async function testConnection() {
    const { data, error } = await supabase
        .from('advertisers')
        .select('*')
        .limit(1);

    if (error) {
        console.error('Connection failed:', error.message);
    } else {
        console.log('Supabase connection successful!');
        console.log('Data:', data);
    }
}

testConnection();
