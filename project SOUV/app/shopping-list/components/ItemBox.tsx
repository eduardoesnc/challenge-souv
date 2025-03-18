'use client';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreVertical, Pencil, Trash2 } from 'lucide-react';
import { useShoppingStore } from '@/store/useShoppingStore';
import { ShoppingItem } from '@/types/ShoppingItem.type';
import { getCategoryIcon } from '@/lib/constants';
import {
  useShoppingItemServiceRemoveItemMutate,
  useShoppingItemServiceUpdateItemMutate,
} from '@/queries/shoppingItem.query';
import { toast } from 'sonner';

interface ItemsBoxProps {
  items?: ShoppingItem[];
  refetch: () => void;
}

const ItemsBox: React.FC<ItemsBoxProps> = ({ items = [], refetch }) => {
  const { setFormData, setIsEditing, setEditingId } = useShoppingStore();

  const { mutate: removeItem } = useShoppingItemServiceRemoveItemMutate({
    onSuccess: () => {
      refetch();
      toast('Item excluído com sucesso!', {
        duration: 3000,
      });
    },
    onError: () => {
      toast('Erro ao excluir item!', {
        duration: 3000,
      });
    },
  });

  const { mutate: updateItem } = useShoppingItemServiceUpdateItemMutate({
    onSuccess: () => {
      refetch();
      toast('Item atualizado com sucesso!', {
        duration: 1000,
      });
    },
    onError: () => {
      toast('Erro ao atualizar item!', {
        duration: 3000,
      });
    },
  });

  const startEditing = (item: ShoppingItem) => {
    setFormData({
      name: item.name,
      quantity: item.quantity,
      unit: item.unit,
      category: item.category,
    });
    setIsEditing(true);
    setEditingId(item.id);
  };

  const handleRemoveItem = (id: string) => {
    removeItem({ id });
  };

  const handleToggleItemCompletion = (item: ShoppingItem) => {
    updateItem({
      id: item.id,
      updateData: {
        completed: !item.completed,
      },
    });
  };

  return (
    <div className='my-4 grid gap-3'>
      {items.length > 0 ? (
        items.map(item => {
          const IconComponent = getCategoryIcon(item.category.value);

          return (
            <div
              key={item.id}
              className={`flex items-center justify-between rounded-lg border p-4 transition-all duration-300 hover:shadow-lg ${item.completed ? 'border-customGray-400 bg-customGray-500' : 'border-customGray-300 bg-customGray-400'} `}
            >
              <div className='flex flex-1 items-center gap-3'>
                <Checkbox
                  checked={item.completed}
                  onCheckedChange={() => handleToggleItemCompletion(item)} // Alterar estado de completed
                  className='h-6 w-6 border border-purpleLight transition-all duration-300 hover:bg-purpleDark data-[state=checked]:border-feedbackSuccess data-[state=checked]:bg-feedbackSuccess hover:data-[state=checked]:border-feedbackSuccessLight hover:data-[state=checked]:bg-feedbackSuccessLight'
                />
                <div className='ml-4 flex-1'>
                  <p
                    className={`font-inter text-sm font-bold text-customGray-100 ${item.completed ? 'font-normal line-through' : ''}`}
                  >
                    {item.name}
                  </p>
                  <p className='mt-[2px] font-inter text-xs font-normal text-customGray-200'>
                    {item.quantity} {item.unit.full}
                    {item.quantity > 1 ? 's' : ''}
                  </p>
                </div>
              </div>
              <div
                className='flex h-8 items-center justify-center gap-1.5 rounded-full px-4 py-2'
                style={{
                  backgroundColor: item.category.colorDark,
                  color: item.category.color,
                }}
              >
                {IconComponent && <IconComponent className='h-4 w-4' />}
                <p className='hidden font-inter text-xs font-semibold md:block'>
                  {item.category.value}
                </p>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant='ghost' size='icon' className='hover:bg-transparent'>
                    <MoreVertical className='h-5 w-5 text-purpleLight' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align='end'
                  className='border-customGray-300 bg-customGray-400'
                >
                  <DropdownMenuItem
                    onClick={() => startEditing(item)}
                    className='rounded-none border-b border-customGray-300 font-inter text-sm text-customGray-100 focus:bg-customGray-300 focus:text-customGray-100'
                  >
                    <Pencil className='mr-2 h-4 w-4' />
                    Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleRemoveItem(item.id)}
                    className='rounded-none border-b border-customGray-300 font-inter text-sm text-destructive focus:bg-customGray-300 focus:text-destructive'
                  >
                    <Trash2 className='mr-2 h-4 w-4' />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          );
        })
      ) : (
        <p className='py-8 text-center text-muted-foreground'>
          Sua lista de compras está vazia. Adicione um item para começar!
        </p>
      )}
    </div>
  );
};

export default ItemsBox;
