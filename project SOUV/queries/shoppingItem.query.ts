import { ShoppingItemService } from '@/services/shoppingItem.service';
import { ShoppingItem, ShoppingItemRequestProps } from '@/types/ShoppingItem.type';
import { UseMutationOptions, useMutation, useQuery } from '@tanstack/react-query';

const commonOptions = {
  refetchOnWindowFocus: true,
  retry: 2,
};

export const useShoppingItemsServiceGetItemsQuery = () =>
    useQuery<ShoppingItem[], Error>({
      queryKey: ['shoppingItems'],
      queryFn: ShoppingItemService.getAllShoppingItems,
      ...commonOptions
});

export const useShoppingItemServiceCreateItemMutate = (
    options?: UseMutationOptions<
        Awaited<ReturnType<typeof ShoppingItemService.createShoppingItem>>,
        unknown,
        Parameters<typeof ShoppingItemService.createShoppingItem>[0],
        unknown
    >
    ) =>
    useMutation({
        mutationFn: (shoppingItem: ShoppingItemRequestProps) => ShoppingItemService.createShoppingItem(shoppingItem),
        ...options,
});

export const useShoppingItemServiceRemoveItemMutate = (
    options?: UseMutationOptions<
        void,
        unknown,
        { id: string },
        unknown
    >
    ) =>
    useMutation({
        mutationFn: ({ id }: { id: string }) => ShoppingItemService.removeShoppingItem(id),
        ...options,
});

export const useShoppingItemServiceUpdateItemMutate = (
    options?: UseMutationOptions<
      Awaited<ReturnType<typeof ShoppingItemService.updateShoppingItem>>,
      unknown,
      { id: string; updateData: Partial<ShoppingItemRequestProps> },
      unknown
    >
  ) =>
    useMutation({
      mutationFn: ({ id, updateData }: { id: string; updateData: Partial<ShoppingItemRequestProps> }) =>
        ShoppingItemService.updateShoppingItem(id, updateData),
      ...options,
});