export type ActionModal = (
  payload?: unknown,
  secundaryAction?: ActionModal
) => void;

export interface ModalStateInterface<T> {
  name: string;
  status?: boolean;
  props: T;
}
