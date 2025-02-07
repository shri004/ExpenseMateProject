import { getUserAccounts } from '@/actions/dashboard';
import React from 'react';
import { defaultCategories } from '@/data/categories';
import AddTransactionForm from '../_components/transaction-form';
import { getTransaction } from '@/actions/transaction';

const AddTransactionPage = async ({ searchParams }) => {
  const accounts = await getUserAccounts();

  // Await searchParams to access its properties
  const resolvedSearchParams = await searchParams;
  const editId = resolvedSearchParams?.edit; // Access the edit parameter

  console.log('Edit ID:', editId); 
  //console.log('Search Params:', resolvedSearchParams); 

  let initialData = null;
  if(editId){
    const transaction = await getTransaction(editId);
    initialData = transaction;

  }


  return (
    <div className="max-w-3xl mx-auto px-5">
      <h1 className="text-5xl gradient-title mb-8"> {editId ? "Edit" : "Add"} Transaction</h1>

      <AddTransactionForm
        accounts={accounts}
        categories={defaultCategories}
        editMode={!!editId} 
        initialData={initialData}
      />
    </div>
  );
}

export default AddTransactionPage;
