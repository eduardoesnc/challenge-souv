'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus, Pencil, X } from 'lucide-react';
import { useShoppingStore } from '@/store/useShoppingStore';
import { categories, units } from '@/lib/constants';
import { InputWithSelect } from '@/components/InputWithSelect';
import { Select } from '@/components/Select';
import { toast } from 'sonner';
import {
  useShoppingItemServiceCreateItemMutate,
  useShoppingItemServiceUpdateItemMutate,
} from '@/queries/shoppingItem.query';

const Form: React.FC<{ refetch: () => void }> = ({ refetch }) => {
  const { formData, isEditing, editingId, setFormData, setIsEditing, setEditingId, resetFormData } =
    useShoppingStore();

  const { mutate: createNewItem } = useShoppingItemServiceCreateItemMutate({
    onSuccess: () => {
      refetch();
      toast('Item adicionado com sucesso!', {
        duration: 3000,
      });
    },
    onError: () => {
      toast('Erro ao adicionar item!', {
        duration: 3000,
      });
    },
  });

  const { mutate: updateItem } = useShoppingItemServiceUpdateItemMutate({
    onSuccess: () => {
      refetch();
      toast('Item atualizado com sucesso!', {
        duration: 3000,
      });
    },
    onError: () => {
      toast('Erro ao atualizar item!', {
        duration: 3000,
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      formData.quantity <= 0 ||
      !formData.unit ||
      formData.category.value === 'Selecione' ||
      !formData.category.value
    ) {
      toast('Por favor, preencha todos os campos.', {
        description: 'Preencha os campos obrigatórios para adicionar o item.',
        duration: 3000,
      });
      return;
    }

    if (isEditing && editingId) {
      updateItem({ id: editingId, updateData: formData });
      setIsEditing(false);
      setEditingId(null);
    } else {
      createNewItem(formData);
    }

    resetFormData();
  };

  const cancelEditing = () => {
    setIsEditing(false);
    setEditingId(null);
    resetFormData();
  };

  const handleCategoryChange = (value: string) => {
    const selectedCategory = categories.find(category => category.value === value) || {
      label: '',
      icon: Plus,
      color: '',
      colorDark: '',
    };

    setFormData({
      ...formData,
      category: {
        value,
        label: selectedCategory.label,
        icon: selectedCategory.icon,
        color: selectedCategory.color,
        colorDark: selectedCategory.colorDark,
      },
    });
  };

  const handleUnitSelectChange = (value: string) => {
    const selectedUnit = units.find(unit => unit.short === value) || { full: '' };
    setFormData({
      ...formData,
      unit: {
        full: selectedUnit.full,
        short: value,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className='flex w-full flex-wrap gap-2 md:flex-nowrap'>
      <div className='w-full md:w-[45%]'>
        <Input
          type='text'
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          label='Item'
        />
      </div>
      <div className='flex w-full gap-2 md:w-[55%]'>
        <InputWithSelect
          className='w-[35%]'
          value={formData.quantity}
          selectValue={formData.unit.short}
          label='Quantidade'
          values={units}
          type='number'
          onInputChange={e => setFormData({ ...formData, quantity: Number(e.target.value) })}
          onSelectChange={handleUnitSelectChange}
        />
        <Select
          className='w-[40%] md:w-[45%]'
          label='Categoria'
          selectedValue={formData.category.value}
          values={categories}
          onValueChange={handleCategoryChange}
        />
        <div className='flex w-[22%] justify-center self-end md:w-[20%]'>
          {isEditing ? (
            <div className='flex gap-2'>
              <Button
                type='submit'
                size='icon'
                className='rounded-full bg-purple hover:bg-purpleDark'
              >
                <Pencil className='h-6 w-6' />
              </Button>
              <Button
                type='button'
                variant='outline'
                size='icon'
                className='rounded-full'
                onClick={cancelEditing}
              >
                <X className='h-6 w-6' />
              </Button>
            </div>
          ) : (
            <Button
              type='submit'
              size='icon'
              className='rounded-full bg-purple hover:bg-purpleDark'
            >
              <Plus className='h-6 w-6' />
            </Button>
          )}
        </div>
      </div>
    </form>
  );
};

export default Form;
